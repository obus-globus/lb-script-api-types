import type { PolyglotByteSequence$Cache } from '../../../../com/oracle/truffle/polyglot/PolyglotByteSequence$Cache.d.ts'
import type { PolyglotContextImpl } from '../../../../com/oracle/truffle/polyglot/PolyglotContextImpl.d.ts'
import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { PolyglotWrapper } from '../../../../com/oracle/truffle/polyglot/PolyglotWrapper.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { ByteSequence } from '../../../../org/graalvm/polyglot/io/ByteSequence.d.ts'
export class PolyglotByteSequence extends Object implements PolyglotWrapper, ByteSequence {
    static asInstance(paramv: Object): PolyglotWrapper;
    static create(paramlanguageContext: PolyglotLanguageContext, parambuffer: Object): PolyglotByteSequence;
    static create(paramlanguageContext: PolyglotLanguageContext, parambuffer: Object, paramst: number, paramlen: number): PolyglotByteSequence;
    static create(parambuffer: number[]): ByteSequence;
    static equals(paramcontext: Object, paramreceiver: Object, paramobj: Object): boolean;
    static equalsProxy(paramwrapper: PolyglotWrapper, paramother: Object): boolean;
    static getHostProxy(paramv: Object): PolyglotWrapper;
    static hashCode(paramcontext: Object, paramreceiver: Object): number;
    static isHostProxy(paramv: Object): boolean;
    static isInstance(paramv: Object): boolean;
    static toString(paramthisObj: PolyglotWrapper): string;
    static toString(paramlanguageContext: Object, paramreceiver: Object): string;
    static toStringImpl(paramlanguageContext: Object, paramreceiver: Object): string;
    constructor(buffer: Object, languageContext: PolyglotLanguageContext)
    constructor(buffer: Object, languageContext: PolyglotLanguageContext, start: number, length: number)
    // private cache: PolyglotByteSequence$Cache;
    // private contextAnchor: Context;
    readonly guestObject: Object;
    readonly languageContext: PolyglotLanguageContext;
    // private length: number;
    // private start: number;
    byteAt(index: number): number;
    bytes(): IntStream;
    equals(o: Object | null): boolean;
    getContext(): PolyglotContextImpl;
    getGuestObject(): Object;
    getLanguageContext(): PolyglotLanguageContext;
    hashCode(): number;
    length(): number;
    subSequence(startIndex: number, endIndex: number): ByteSequence;
    subSequence(startIndex: number, endIndex: number): ByteSequence;
    toByteArray(): number[];
    toByteArray(): number[];
    toString(): string;
}