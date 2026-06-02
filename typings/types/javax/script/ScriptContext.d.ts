import type { Reader } from '../../java/io/Reader.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ScriptContext extends Object{
    getAttribute(arg0: string): Object;
    getAttribute(arg0: string, arg1: number): Object;
    getAttributesScope(arg0: string): number;
    getBindings(arg0: number): Bindings;
    getErrorWriter(): Writer;
    getReader(): Reader;
    getScopes(): number[];
    getWriter(): Writer;
    removeAttribute(arg0: string, arg1: number): Object;
    setAttribute(arg0: string, arg1: Object, arg2: number): void;
    setBindings(arg0: Bindings, arg1: number): void;
    setErrorWriter(arg0: Writer): void;
    setReader(arg0: Reader): void;
    setWriter(arg0: Writer): void;
}