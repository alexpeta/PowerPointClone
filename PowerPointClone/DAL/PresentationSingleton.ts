﻿import Presentation = require('Model/Presentation');
import PresentationRepository = require('Repositories/PresentationRepository')

module Singleton {
    export class PresentationSingleton {
        private static _instance: PresentationSingleton = new PresentationSingleton();
        private _presentation: Presentation = new Presentation();
        private _pRepository = new PresentationRepository.PresentationReposiotry();

        constructor() {
            if (PresentationSingleton._instance) {
                throw new Error("Error: Instantiation failed: Use PresentationSingleton.GetInstance() instead of new");
            }

            PresentationSingleton._instance = this;
        }

        public static GetInstance(): PresentationSingleton {
            return PresentationSingleton._instance;
        }

        public GetPresentation(): Presentation {
            return this._presentation;
        }

        public SavePresentation(presentation: Presentation): void {
            this._presentation = presentation;
            this._pRepository.Update(this._presentation);
        }
    }
}

export = Singleton;