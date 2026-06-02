import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LanguageInfo extends Object {
    constructor(languageCache: Object, id: string, name: string, version: string, defaultMimeType: string, mimeTypes: string[], internal: boolean, interactive: boolean)
    readonly defaultMimeType: string;
    readonly id: string;
    readonly interactive: boolean;
    readonly internal: boolean;
    // private languageCache: Object;
    readonly mimeTypes: string[];
    readonly name: string;
    readonly version: string;
    getDefaultMimeType(): string;
    getId(): string;
    getLanguageCache(): Object;
    getMimeTypes(): string[];
    getName(): string;
    getVersion(): string;
    isInteractive(): boolean;
    isInternal(): boolean;
}