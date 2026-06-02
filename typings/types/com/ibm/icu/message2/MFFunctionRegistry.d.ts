import type { FormatterFactory } from '../../../../com/ibm/icu/message2/FormatterFactory.d.ts'
import type { MFFunctionRegistry$Builder } from '../../../../com/ibm/icu/message2/MFFunctionRegistry$Builder.d.ts'
import type { SelectorFactory } from '../../../../com/ibm/icu/message2/SelectorFactory.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFFunctionRegistry extends Object {
    static builder(): MFFunctionRegistry$Builder;
    private constructor(arg0: MFFunctionRegistry$Builder)
    // private classToFormatter: Map<Class<Object>, string>;
    // private formattersMap: { [key: string]: FormatterFactory };
    // private selectorsMap: { [key: string]: SelectorFactory };
    getDefaultFormatterNameForType(arg0: Class<Object>): string;
    getDefaultFormatterTypes(): Class<Object>[];
    getFormatter(arg0: string): FormatterFactory;
    getFormatterNames(): string[];
    getSelector(arg0: string): SelectorFactory;
    getSelectorNames(): string[];
}