import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { CallAdapter$Factory } from '../retrofit2/CallAdapter$Factory.d.ts'
import type { Converter$Factory } from '../retrofit2/Converter$Factory.d.ts'
export class BuiltInFactories extends Object {
    constructor()
    createDefaultCallAdapterFactories(arg0: Executor): CallAdapter$Factory[];
    createDefaultConverterFactories(): Converter$Factory[];
}