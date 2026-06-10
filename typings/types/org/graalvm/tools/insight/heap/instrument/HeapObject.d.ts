import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Insight$SymbolProvider } from '../../../../../../org/graalvm/tools/insight/Insight$SymbolProvider.d.ts'
import type { HeapDump$Builder } from '../../../../../../org/graalvm/tools/insight/heap/HeapDump$Builder.d.ts'
import type { CacheReplacement } from '../../../../../../org/graalvm/tools/insight/heap/instrument/CacheReplacement.d.ts'
import type { MemoryDump } from '../../../../../../org/graalvm/tools/insight/heap/instrument/MemoryDump.d.ts'
export class HeapObject extends Object implements TruffleObject, Consumer<OutputStream>, Insight$SymbolProvider {
    constructor(env: TruffleInstrument$Env, path: string, cacheSize: number, cacheReplacement: CacheReplacement, exposeCache: boolean)
    // private env: TruffleInstrument$Env;
    // private exposeCache: boolean;
    // private generator: HeapDump$Builder;
    // private memoryDump: MemoryDump;
    // private path: string;
    // private sink: OutputStream;
    accept(t: OutputStream): void;
    andThen(arg0: (param0: OutputStream) => void): (param0: OutputStream) => void;
    // private checkArity(arity: number, args: Object[]): void;
    close(): void;
    // private dump(args: Object[]): void;
    flush(): void;
    // private generateDump(args: Object[]): void;
    getGenerator(): HeapDump$Builder;
    // private getGeneratorOrNull(): HeapDump$Builder;
    getMembers(includeInternal: boolean): Object;
    // private getSink(): OutputStream;
    hasMembers(): boolean;
    invokeMember(name: string, args: Object[]): Object;
    isMemberInvocable(member: string): boolean;
    isMemberReadable(member: string): boolean;
    readMember(name: string): Object;
    // private setGenerator(generator: HeapDump$Builder): void;
    // private setSink(sink: OutputStream): void;
    symbolsWithValues(): { [key: string]: Object | null };
}