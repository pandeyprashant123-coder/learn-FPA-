import * as React from "react"

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

const ChildrenAsString = (children) => {

    if (!Array.isArray(children)) return "";

    return children.map(i => {
        
        if (i.type.startsWith('html_')) return ChildrenAsString(i.children)
        return i.data || ""
       
    }).join('\n');

}

const CreateWidget = (item) => {

    const head = item?.children?.filter(i => i.type == 'html_head')[0]
    const body = item?.children?.filter(i => i.type == 'html_body')[0]
    const script = item?.children?.filter(i => i.type == 'html_script')[0]

    const ui = [];

    // Data for Runnable
    const doc = {
        getElementById: () => {  }
    };
    const UI = {
        showButton: (name) => { 
            
            const button = <button className="w-full bg-slate-50 hover:bg-slate-100 p-4 rounded font-bold">{name}</button>; 
            ui.push(<div className="w-64">{button}</div>);
            return button;
        
        }
    };

    try {

        const runnable = Function("document", "UI", `"use strict";${ChildrenAsString(script.children)}`);
        const runnableOutput = runnable(doc, UI);

        console.log(runnable);
        console.log(runnableOutput);

    } catch (e) {

        console.log(e);

    }

    return <div className="w-full">
        <div className="flex w-full h-full p-2 gap-2">
            <div className="w-full h-80">
                <div id="canvas" className="w-full h-full bg-white rounded shadow">

                </div>
            </div>
            <div className="h-full flex flex-col align-start justify-start gap-2">
                <div className="w-64">
                    <button className="w-full bg-slate-50 hover:bg-slate-100 p-4 rounded font-bold">Press Me</button>
                </div>
                <div className="w-64">
                    <button className="w-full bg-slate-50 hover:bg-slate-100 p-4 rounded font-bold">Press Me</button>
                </div>
                <div className="w-64">
                    <button className="w-full bg-slate-50 hover:bg-slate-100 p-4 rounded font-bold">Press Me</button>
                </div>
            </div>
        </div>
    </div>

}

const RenderMarkdown = (body) => {

    return body.map(item => {

        if (item.type == 'h1') return;

        if (item.type == 'p') {

            return <p class="text-lg mb-2">{item.data}</p>

        }

        if (item.type == 'h2') {

            return <h2 class="text-3xl font-bold w-full mt-8 mb-2 border-b-2">{item.data}</h2>

        }
        

        if (item.type == 'h3') {

            return <h2 class="text-2xl font-bold w-full mt-8 mb-2 border-b-2">{item.data}</h2>

        }

        if (item.type == 'h4') {

            return <h2 class="text-xl font-bold w-full mt-8 mb-2 border-b-2">{item.data}</h2>

        }

        if (item.type == 'h5') {

            return <h2 class="text-lg font-bold w-full mt-8 mb-2 border-b-2">{item.data}</h2>

        }

        if (item.type == 'code') {

            return <div className="block w-full p-4 bg-slate-50 rounded my-2" dangerouslySetInnerHTML={{ __html: hljs.highlight(item.data, {language: item.lang}).value }} />;

        }

        if (item.type == 'html_widget') {
            
            return CreateWidget(item);

        }

        return item.type;

    })

}

export default RenderMarkdown;