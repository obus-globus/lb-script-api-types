import type { File } from '../../../java/io/File.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Instrumentation } from '../../../java/lang/instrument/Instrumentation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Agents extends Object {
    static createDummyAgent(paramarg0: Class<Object>): File;
    static createDummyAgent(paramarg0: File, paramarg1: string): void;
    static getInstrumentation(): Instrumentation;
    static load(paramarg0: File): void;
    static loadInternal(paramarg0: Class<Object>): void;
    constructor()
}