import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class Token$ID extends Enum<Token$ID> {
    static Alias: Token$ID;
    static Anchor: Token$ID;
    static BlockEnd: Token$ID;
    static BlockEntry: Token$ID;
    static BlockMappingStart: Token$ID;
    static BlockSequenceStart: Token$ID;
    static Comment: Token$ID;
    static Directive: Token$ID;
    static DocumentEnd: Token$ID;
    static DocumentStart: Token$ID;
    static Error: Token$ID;
    static FlowEntry: Token$ID;
    static FlowMappingEnd: Token$ID;
    static FlowMappingStart: Token$ID;
    static FlowSequenceEnd: Token$ID;
    static FlowSequenceStart: Token$ID;
    static Key: Token$ID;
    static Scalar: Token$ID;
    static StreamEnd: Token$ID;
    static StreamStart: Token$ID;
    static Tag: Token$ID;
    static Value: Token$ID;
    static Whitespace: Token$ID;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Token$ID;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private description: string;
    toString(): string;
    name(): "Alias" | "Anchor" | "BlockEnd" | "BlockEntry" | "BlockMappingStart" | "BlockSequenceStart" | "Directive" | "DocumentEnd" | "DocumentStart" | "FlowEntry" | "FlowMappingEnd" | "FlowMappingStart" | "FlowSequenceEnd" | "FlowSequenceStart" | "Key" | "Scalar" | "StreamEnd" | "StreamStart" | "Tag" | "Value" | "Whitespace" | "Comment" | "Error";
}