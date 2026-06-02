import type { FormatterFactory } from '../../../../com/ibm/icu/message2/FormatterFactory.d.ts'
import type { MFFunctionRegistry } from '../../../../com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { SelectorFactory } from '../../../../com/ibm/icu/message2/SelectorFactory.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MFFunctionRegistry$Builder extends Object {
    private constructor()
    // private classToFormatter: Map<Class<Object>, string>;
    // private formattersMap: { [key: string]: FormatterFactory };
    // private selectorsMap: { [key: string]: SelectorFactory };
    addAll(arg0: MFFunctionRegistry): MFFunctionRegistry$Builder;
    build(): MFFunctionRegistry;
    clearDefaultFormatterNames(): MFFunctionRegistry$Builder;
    clearFormatters(): MFFunctionRegistry$Builder;
    clearSelectors(): MFFunctionRegistry$Builder;
    removeDefaultFormatterNameForType(arg0: Class<Object>): MFFunctionRegistry$Builder;
    removeFormatter(arg0: string): MFFunctionRegistry$Builder;
    removeSelector(arg0: string): MFFunctionRegistry$Builder;
    setDefaultFormatterNameForType(arg0: Class<Object>, arg1: string): MFFunctionRegistry$Builder;
    setFormatter(arg0: string, arg1: FormatterFactory): MFFunctionRegistry$Builder;
    setSelector(arg0: string, arg1: SelectorFactory): MFFunctionRegistry$Builder;
}