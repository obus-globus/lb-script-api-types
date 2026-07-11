import type { MetadataDescriptor$Attribute } from '../../../jdk/jfr/internal/MetadataDescriptor$Attribute.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class MetadataDescriptor$Element extends Object {
    constructor(arg0: string)
    // private attributes: MetadataDescriptor$Attribute[];
    // private elements: MetadataDescriptor$Element[];
    // private name: string;
    add(arg0: MetadataDescriptor$Element): void;
    addArrayAttribute(arg0: MetadataDescriptor$Element, arg1: string, arg2: Object): void;
    addAttribute(arg0: string, arg1: Object): void;
    attribute(arg0: string): string;
    attribute(arg0: string, arg1: number): number;
    attribute(arg0: string, arg1: string): string;
    elements(...arg0: string[]): MetadataDescriptor$Element[];
    longValue(arg0: string): number;
    newChild(arg0: string): MetadataDescriptor$Element;
    toString(): string;
}