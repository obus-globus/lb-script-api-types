import type { TruffleLocator$Response } from '../../../../../com/oracle/truffle/api/impl/TruffleLocator$Response.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TruffleLocator extends Object {
    static loaders(): ClassLoader[];
    constructor()
    locate(response: TruffleLocator$Response): void;
}