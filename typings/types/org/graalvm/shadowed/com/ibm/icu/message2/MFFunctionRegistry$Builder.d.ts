import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormatterFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/FormatterFactory.d.ts'
import type { MFFunctionRegistry } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/MFFunctionRegistry.d.ts'
import type { SelectorFactory } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/message2/SelectorFactory.d.ts'
export class MFFunctionRegistry$Builder extends Object {
    private constructor()
    // private classToFormatter: JavaMap<Class<Object>, string>;
    // private formattersMap: JavaMap<string, FormatterFactory>;
    // private selectorsMap: JavaMap<string, SelectorFactory>;
    addAll(functionRegistry: MFFunctionRegistry): MFFunctionRegistry$Builder;
    build(): MFFunctionRegistry;
    clearDefaultFormatterNames(): MFFunctionRegistry$Builder;
    clearFormatters(): MFFunctionRegistry$Builder;
    clearSelectors(): MFFunctionRegistry$Builder;
    removeDefaultFormatterNameForType(clazz: Class<Object>): MFFunctionRegistry$Builder;
    removeFormatter(formatterName: string): MFFunctionRegistry$Builder;
    removeSelector(selectorName: string): MFFunctionRegistry$Builder;
    setDefaultFormatterNameForType(clazz: Class<Object>, formatterName: string): MFFunctionRegistry$Builder;
    setFormatter(formatterName: string, formatterFactory: FormatterFactory): MFFunctionRegistry$Builder;
    setSelector(selectorName: string, selectorFactory: SelectorFactory): MFFunctionRegistry$Builder;
}