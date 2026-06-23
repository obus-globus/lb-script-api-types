import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Provider$Service } from '../../java/security/Provider$Service.d.ts'
import type { AlgorithmParameterSpec } from '../../java/security/spec/AlgorithmParameterSpec.d.ts'
import type { MacSpi } from '../../javax/crypto/MacSpi.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class Mac extends Object implements Cloneable {
    static getInstance(paramarg0: string): Mac;
    static getInstance(paramarg0: string, paramarg1: string): Mac;
    static getInstance(paramarg0: string, paramarg1: { [key: string]: any }): Mac;
    private constructor(arg0: Provider$Service, arg1: Iterator<Provider$Service>, arg2: string)
    constructor(arg0: MacSpi, arg1: { [key: string]: any }, arg2: string)
    readonly algorithm: string;
    // private firstService: Provider$Service;
    // private initialized: boolean;
    // private lock: Object;
    readonly provider: { [key: string]: any };
    // private serviceIterator: Iterator<Provider$Service>;
    // private spi: MacSpi;
    chooseFirstProvider(): void;
    // private chooseProvider(arg0: Key, arg1: AlgorithmParameterSpec): void;
    clone(): Object;
    protected clone(): Object;
    doFinal(): number[];
    doFinal(arg0: number[]): number[];
    doFinal(arg0: number[], arg1: number): void;
    getAlgorithm(): string;
    getMacLength(): number;
    getProvider(): { [key: string]: any };
    // private getProviderName(): string;
    init(arg0: Key): void;
    init(arg0: Key, arg1: AlgorithmParameterSpec): void;
    reset(): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
}