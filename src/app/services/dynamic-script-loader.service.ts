// Dynamic script loader
// This script allow all components (web pages) to load necessary js file on demand
// All available scripts are defined in the ScriptStore, and only this file are visible in all application

import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

// javascript list file
// these files are loaded on demand by each module
export const ScriptStore: Scripts[] = [
  { name: 'highcharts', src: './../../../assets/js/highcharts.js' },
  { name: 'parallel-axes', src: './../../../assets/js/parallel-coordinates.js' },
  { name: 'spline', src: './../../../assets/js/splineDraw.js' },
  { name: 'exporting', src: './../../../assets/js/exporting.js' },
  { name: 'series-label', src: './../../../assets/js/series-label.js' },
  { name: 'streamgraph', src: './../../../assets/js/streamgraph.js' },
  { name: 'streamgraphDraw', src: './../../../assets/js/streamgraphDraw.js' },
  { name: 'annotations', src: './../../../assets/js/annotations.js' },
  { name: 'sunburst', src: './../../../assets/js/sunburst.js' },
  { name: 'sunburstDraw', src: './../../../assets/js/sunburstDraw.js' },
  { name: 'treemapDraw', src: './../../../assets/js/treemapDraw.js' },
  { name: 'treemap', src: './../../../assets/js/treemap.js' },
  { name: 'heatmap', src: './../../../assets/js/heatmap.js' }
];

declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {

  private scripts: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        //load script
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  //IE
            script.onreadystatechange = () => {
                if (script.readyState === "loaded" || script.readyState === "complete") {
                    script.onreadystatechange = null;
                    this.scripts[name].loaded = true;
                    resolve({script: name, loaded: true, status: 'Loaded'});
                }
            };
        } else {  //Others
            script.onload = () => {
                this.scripts[name].loaded = true;
                resolve({script: name, loaded: true, status: 'Loaded'});
            };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}