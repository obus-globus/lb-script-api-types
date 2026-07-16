import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
import type { Level } from '../../../../org/spongepowered/asm/logging/Level.d.ts'
export class MixinAgentClassLoader extends ClassLoader {
    static getPlatformClassLoader(): ClassLoader;
    static getSystemClassLoader(): ClassLoader;
    static getSystemResource(paramarg0: string): URL;
    static getSystemResourceAsStream(paramarg0: string): InputStream;
    static getSystemResources(paramarg0: string): Enumeration<URL>;
    static log(paramarg0: Level, paramarg1: string, ...paramarg2: Object[]): void;
    constructor()
    // private mixins: Map<Class<Object>, number[]>;
    // private targets: { [key: string]: number[] };
    addMixinClass(arg0: string): void;
    addTargetClass(arg0: string, arg1: ClassNode): void;
    getFakeMixinBytecode(arg0: Class<Object>): number[];
    getOriginalTargetBytecode(arg0: string): number[];
    // private materialise(arg0: string): number[];
}