import type { AsciiString } from '../../../../io/netty/util/AsciiString.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Certificate } from '../../../../java/security/cert/Certificate.d.ts'
import type { X509Certificate } from '../../../../java/security/cert/X509Certificate.d.ts'
import type { X509Certificate as X509Certificate_2 } from '../../../../javax/security/cert/X509Certificate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class EmptyArrays extends Object {
    static EMPTY_ASCII_STRINGS: AsciiString[];
    static EMPTY_BYTES: number[];
    static EMPTY_BYTE_BUFFERS: ByteBuffer[];
    static EMPTY_CERTIFICATES: Certificate[];
    static EMPTY_CHARS: string[];
    static EMPTY_CLASSES: Class<Object>[];
    static EMPTY_INTS: number[];
    static EMPTY_JAVAX_X509_CERTIFICATES: X509Certificate_2[];
    static EMPTY_MAP_ENTRY: Map$Entry<Object, Object>[];
    static EMPTY_OBJECTS: Object[];
    static EMPTY_STACK_TRACE: StackTraceElement[];
    static EMPTY_STRINGS: string[];
    static EMPTY_THROWABLES: Throwable[];
    static EMPTY_X509_CERTIFICATES: X509Certificate[];
    private constructor()
}