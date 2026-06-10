import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { URL } from '../../../../../java/net/URL.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
export interface FabricLauncher extends Object{
    getClassByteArray(arg0: string, arg1: boolean): number[];
    getEnvironmentType(): EnvType;
    getLoadTimeDependencies(): URL[];
    getResourceAsStream(arg0: string): InputStream;
    getTargetClassLoader(): ClassLoader;
    isClassLoaded(arg0: string): boolean;
    isDevelopment(): boolean;
    propose(arg0: URL): void;
}