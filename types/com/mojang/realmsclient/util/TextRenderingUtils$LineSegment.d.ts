import type { Object } from '../../../../java/lang/Object.d.ts'
export class TextRenderingUtils$LineSegment extends Object {
    static link(paramlinkTitle: string, paramlinkUrl: string): TextRenderingUtils$LineSegment;
    private constructor(fullText: string)
    private constructor(fullText: string, linkTitle: string, linkUrl: string)
    // private fullText: string;
    // private linkTitle: string;
    readonly linkUrl: string;
    equals(o: Object | null): boolean;
    getLinkUrl(): string;
    hashCode(): number;
    isLink(): boolean;
    renderedText(): string;
    toString(): string;
}