import type { DoubleBuffer } from '../../../java/nio/DoubleBuffer.d.ts'
import type { LongBuffer } from '../../../java/nio/LongBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SOFTSourceLatency extends Object {
    static AL_SAMPLE_OFFSET_LATENCY_SOFT: number;
    static AL_SEC_OFFSET_LATENCY_SOFT: number;
    static alGetSource3dDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static alGetSource3dDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer, paramarg4: DoubleBuffer, paramarg5: DoubleBuffer): void;
    static alGetSource3dSOFT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): void;
    static alGetSource3dSOFT(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer, paramarg3: DoubleBuffer, paramarg4: DoubleBuffer): void;
    static alGetSource3i64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer, paramarg4: LongBuffer, paramarg5: LongBuffer): void;
    static alGetSource3i64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[], paramarg5: number[]): void;
    static alGetSource3i64SOFT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer, paramarg3: LongBuffer, paramarg4: LongBuffer): void;
    static alGetSource3i64SOFT(paramarg0: number, paramarg1: number, paramarg2: number[], paramarg3: number[], paramarg4: number[]): void;
    static alGetSourcedDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static alGetSourcedDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static alGetSourcedDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer): void;
    static alGetSourcedSOFT(paramarg0: number, paramarg1: number): number;
    static alGetSourcedSOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static alGetSourcedSOFT(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static alGetSourcedvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static alGetSourcedvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer): void;
    static alGetSourcedvSOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static alGetSourcedvSOFT(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static alGetSourcei64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static alGetSourcei64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): void;
    static alGetSourcei64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static alGetSourcei64SOFT(paramarg0: number, paramarg1: number): number;
    static alGetSourcei64SOFT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static alGetSourcei64SOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static alGetSourcei64vDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): void;
    static alGetSourcei64vDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static alGetSourcei64vSOFT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static alGetSourcei64vSOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static alSource3dDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static alSource3dSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static alSource3i64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static alSource3i64SOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static alSourcedDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static alSourcedSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static alSourcedvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static alSourcedvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: DoubleBuffer): void;
    static alSourcedvSOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static alSourcedvSOFT(paramarg0: number, paramarg1: number, paramarg2: DoubleBuffer): void;
    static alSourcei64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static alSourcei64SOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static alSourcei64vDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: LongBuffer): void;
    static alSourcei64vDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): void;
    static alSourcei64vSOFT(paramarg0: number, paramarg1: number, paramarg2: LongBuffer): void;
    static alSourcei64vSOFT(paramarg0: number, paramarg1: number, paramarg2: number[]): void;
    static nalGetSource3dDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalGetSource3dSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalGetSource3i64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number, paramarg5: number): void;
    static nalGetSource3i64SOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): void;
    static nalGetSourcedDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalGetSourcedSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalGetSourcedvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalGetSourcedvSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalGetSourcei64DirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalGetSourcei64SOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalGetSourcei64vDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalGetSourcei64vSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalSourcedvDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalSourcedvSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static nalSourcei64vDirectSOFT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static nalSourcei64vSOFT(paramarg0: number, paramarg1: number, paramarg2: number): void;
    constructor()
}