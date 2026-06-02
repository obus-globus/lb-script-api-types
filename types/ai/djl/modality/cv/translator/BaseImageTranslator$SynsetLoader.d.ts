import type { Model } from '../../../../../ai/djl/Model.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BaseImageTranslator$SynsetLoader extends Object {
    constructor(arg0: URL)
    constructor(arg0: string)
    constructor(arg0: string[])
    // private synset: string[];
    // private synsetFileName: string;
    // private synsetUrl: URL;
    load(arg0: Model): string[];
}