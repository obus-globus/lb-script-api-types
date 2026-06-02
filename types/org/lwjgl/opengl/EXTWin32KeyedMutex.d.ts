import type { Object } from '../../../java/lang/Object.d.ts'
export class EXTWin32KeyedMutex extends Object {
    static glAcquireKeyedMutexWin32EXT(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static glReleaseKeyedMutexWin32EXT(paramarg0: number, paramarg1: number): boolean;
    constructor()
}