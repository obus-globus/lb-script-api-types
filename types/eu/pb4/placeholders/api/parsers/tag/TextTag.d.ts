import type { StringArgs } from '../../../../../../eu/pb4/placeholders/api/arguments/StringArgs.d.ts'
import type { TextNode } from '../../../../../../eu/pb4/placeholders/api/node/TextNode.d.ts'
import type { NodeCreator } from '../../../../../../eu/pb4/placeholders/api/parsers/tag/NodeCreator.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TextTag extends Record {
    static enclosing(paramarg0: string, paramarg1: string, paramarg2: boolean, paramarg3: NodeCreator): TextTag;
    static enclosing(paramarg0: string, paramarg1: string, paramarg2: NodeCreator): TextTag;
    static enclosing(paramarg0: string, paramarg1: E[], paramarg2: string, paramarg3: boolean, paramarg4: NodeCreator): TextTag;
    static self(paramarg0: string, paramarg1: string, paramarg2: boolean, paramarg3: NodeCreator): TextTag;
    static self(paramarg0: string, paramarg1: string, paramarg2: boolean, paramarg3: (param0: StringArgs) => TextNode): TextTag;
    static self(paramarg0: string, paramarg1: string, paramarg2: NodeCreator): TextTag;
    static self(paramarg0: string, paramarg1: string, paramarg2: (param0: StringArgs) => TextNode): TextTag;
    static self(paramarg0: string, paramarg1: E[], paramarg2: string, paramarg3: boolean, paramarg4: NodeCreator): TextTag;
    static self(paramarg0: string, paramarg1: E[], paramarg2: string, paramarg3: boolean, paramarg4: (param0: StringArgs) => TextNode): TextTag;
    // private aliases: string[];
    // private name: string;
    // private nodeCreator: NodeCreator;
    // private selfContained: boolean;
    // private type: string;
    // private userSafe: boolean;
    aliases(): string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    nodeCreator(): NodeCreator;
    selfContained(): boolean;
    toString(): string;
    type(): string;
    userSafe(): boolean;
}