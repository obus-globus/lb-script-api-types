import type { Object } from '../../../../java/lang/Object.d.ts'
export class Link extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string)
    readonly rel: string;
    readonly text: string;
    readonly title: string;
    readonly type: string;
    readonly uri: string;
    getRel(): string;
    getText(): string;
    getTitle(): string;
    getType(): string;
    getUri(): string;
    isAnchor(): boolean;
    isIframe(): boolean;
    isImage(): boolean;
    isLink(): boolean;
    isScript(): boolean;
    toString(): string;
}