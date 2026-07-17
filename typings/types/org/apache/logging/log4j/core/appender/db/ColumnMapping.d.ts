import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { StringLayout } from '../../../../../../../org/apache/logging/log4j/core/StringLayout.d.ts'
import type { ColumnMapping$Builder } from '../../../../../../../org/apache/logging/log4j/core/appender/db/ColumnMapping$Builder.d.ts'
export class ColumnMapping extends Object {
    static EMPTY_ARRAY: ColumnMapping[];
    static newBuilder(): ColumnMapping$Builder;
    static toKey(paramname: string): string;
    private constructor(name: string, source: string, layout: StringLayout, literalValue: string, parameter: string, type: Class<Object>)
    readonly layout: StringLayout;
    readonly literalValue: string;
    readonly name: string;
    readonly nameKey: string;
    readonly parameter: string;
    readonly source: string;
    readonly type: Class<Object>;
    equals(o: Object | null): boolean;
    getLayout(): StringLayout;
    getLiteralValue(): string;
    getName(): string;
    getNameKey(): string;
    getParameter(): string;
    getSource(): string;
    getType(): Class<Object>;
    hashCode(): number;
    toString(): string;
}