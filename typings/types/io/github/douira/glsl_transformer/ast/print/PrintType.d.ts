import type { TokenProcessor } from '../../../../../../io/github/douira/glsl_transformer/ast/print/TokenProcessor.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PrintType extends Enum<PrintType> {
    static COMPACT: PrintType;
    static COMPACT_ANNOTATED: PrintType;
    static INDENTED: PrintType;
    static INDENTED_ANNOTATED: PrintType;
    static SIMPLE: PrintType;
    static SIMPLE_ANNOTATED: PrintType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PrintType;
    static values(): PrintType[];
    private constructor(arg2: () => TokenProcessor)
    // private printerSupplier: () => TokenProcessor;
    getTokenProcessor(): TokenProcessor;
    name(): "SIMPLE" | "INDENTED" | "COMPACT" | "SIMPLE_ANNOTATED" | "INDENTED_ANNOTATED" | "COMPACT_ANNOTATED";
}