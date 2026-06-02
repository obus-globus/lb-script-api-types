import type { BytecodeDSLAccess } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeDSLAccess.d.ts'
import type { FrameExtensions } from '../../../../../com/oracle/truffle/api/frame/FrameExtensions.d.ts'
import type { ByteArraySupport } from '../../../../../com/oracle/truffle/api/memory/ByteArraySupport.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeDSLCheckedAccess extends BytecodeDSLAccess {
    static lookup(paramtoken: Object, paramallowUnsafe: boolean): BytecodeDSLAccess;
    constructor()
    getByteArraySupport(): ByteArraySupport;
    getFrameExtensions(): FrameExtensions;
    readInt(arr: number[], index: number): number;
    readObject<T extends Object | number | string | boolean>(arr: T[], index: number): T;
    uncheckedCast<T extends Object | number | string | boolean>(obj: Object, clazz: Class<T>): T;
    writeInt(arr: number[], index: number, value: number): void;
    writeObject<T extends Object | number | string | boolean>(arr: T[], index: number, value: T): void;
}