import type { Executor } from '../java/util/concurrent/Executor.d.ts'
import type { BuiltInFactories } from '../retrofit2/BuiltInFactories.d.ts'
import type { CallAdapter$Factory } from '../retrofit2/CallAdapter$Factory.d.ts'
import type { Converter$Factory } from '../retrofit2/Converter$Factory.d.ts'
export class BuiltInFactories$Java8 extends BuiltInFactories {
    constructor()
    createDefaultCallAdapterFactories(arg0: Executor): CallAdapter$Factory[];
    createDefaultConverterFactories(): Converter$Factory[];
}