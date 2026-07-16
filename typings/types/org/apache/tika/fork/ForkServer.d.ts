import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ForkServer extends Object implements Runnable {
    static CALL: number;
    static DONE: number;
    static ERROR: number;
    static FAILED_TO_START: number;
    static INIT_LOADER_PARSER: number;
    static INIT_PARSER_FACTORY_FACTORY: number;
    static INIT_PARSER_FACTORY_FACTORY_LOADER: number;
    static PING: number;
    static READY: number;
    static RESOURCE: number;
    static main(paramarg0: string[]): void;
    constructor(arg0: InputStream, arg1: OutputStream, arg2: number, arg3: number, arg4: number)
    // private active: boolean;
    // private classLoader: ClassLoader;
    // private input: DataInputStream;
    // private lock: Object[];
    // private output: DataOutputStream;
    // private parser: Object;
    // private parsing: boolean;
    // private serverParserTimeoutMillis: number;
    // private serverPulseMillis: number;
    // private serverWaitTimeoutMillis: number;
    // private since: number;
    // private call(arg0: ClassLoader, arg1: Object): void;
    // private getMethod(arg0: Object, arg1: string): Method;
    // private initializeParserAndLoader(): void;
    processRequests(): void;
    // private readObject(arg0: ClassLoader): Object;
    run(): void;
}