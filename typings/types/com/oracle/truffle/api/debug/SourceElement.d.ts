import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class SourceElement extends Enum<SourceElement> {
    static EXPRESSION: SourceElement;
    static ROOT: SourceElement;
    static STATEMENT: SourceElement;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SourceElement;
    static values(): SourceElement[];
    private constructor(tag: Class<Tag>)
    // private tag: Class<Tag>;
    getTag(): Class<Tag>;
    name(): "STATEMENT" | "EXPRESSION" | "ROOT";
}