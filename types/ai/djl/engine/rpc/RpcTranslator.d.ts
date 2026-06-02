import type { RpcClient } from '../../../../ai/djl/engine/rpc/RpcClient.d.ts'
import type { TypeConverter } from '../../../../ai/djl/engine/rpc/TypeConverter.d.ts'
import type { Batchifier } from '../../../../ai/djl/translate/Batchifier.d.ts'
import type { NoBatchifyTranslator } from '../../../../ai/djl/translate/NoBatchifyTranslator.d.ts'
import type { TranslatorContext } from '../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RpcTranslator<I extends Object | number | string | boolean, O extends Object | number | string | boolean> extends Object implements NoBatchifyTranslator<I, O> {
    constructor(arg0: RpcClient, arg1: TypeConverter<I, O>)
    // private client: RpcClient;
    // private converter: TypeConverter<I, O>;
    getBatchifier(): Batchifier;
    processInput(arg0: TranslatorContext, arg1: I): (Object | null)[];
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): O;
}