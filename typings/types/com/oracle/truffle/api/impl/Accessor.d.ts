import type { Accessor$EngineSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$EngineSupport.d.ts'
import type { Accessor$ExceptionSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$ExceptionSupport.d.ts'
import type { Accessor$FrameSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$FrameSupport.d.ts'
import type { Accessor$HostSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$HostSupport.d.ts'
import type { Accessor$IOSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$IOSupport.d.ts'
import type { Accessor$InstrumentProviderSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$InstrumentProviderSupport.d.ts'
import type { Accessor$InstrumentSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$InstrumentSupport.d.ts'
import type { Accessor$InteropSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$InteropSupport.d.ts'
import type { Accessor$LanguageProviderSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$LanguageProviderSupport.d.ts'
import type { Accessor$LanguageSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$LanguageSupport.d.ts'
import type { Accessor$MemorySupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$MemorySupport.d.ts'
import type { Accessor$NodeSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$NodeSupport.d.ts'
import type { Accessor$RuntimeSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$RuntimeSupport.d.ts'
import type { Accessor$SourceSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$SourceSupport.d.ts'
import type { Accessor$StringsSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$StringsSupport.d.ts'
import type { FrameWithoutBoxing } from '../../../../../com/oracle/truffle/api/impl/FrameWithoutBoxing.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor extends Object {
    static main(...paramargs: string[]): void;
    constructor()
    engineSupport(): Accessor$EngineSupport;
    exceptionSupport(): Accessor$ExceptionSupport;
    framesSupport(): Accessor$FrameSupport;
    hostSupport(): Accessor$HostSupport;
    initializeNativeImageTruffleLocator(): void;
    instrumentProviderSupport(): Accessor$InstrumentProviderSupport;
    instrumentSupport(): Accessor$InstrumentSupport;
    interopSupport(): Accessor$InteropSupport;
    ioSupport(): Accessor$IOSupport;
    languageProviderSupport(): Accessor$LanguageProviderSupport;
    languageSupport(): Accessor$LanguageSupport;
    memorySupport(): Accessor$MemorySupport;
    nodeSupport(): Accessor$NodeSupport;
    runtimeSupport(): Accessor$RuntimeSupport;
    sourceSupport(): Accessor$SourceSupport;
    startOSRFrameTransfer(target: FrameWithoutBoxing): void;
    stringsSupport(): Accessor$StringsSupport;
    transferOSRFrameStaticSlot(sourceFrame: FrameWithoutBoxing, targetFrame: FrameWithoutBoxing, slot: number): void;
}