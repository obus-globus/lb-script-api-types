import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { ClassLoader } from '../../../../../java/lang/ClassLoader.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Manifest } from '../../../../../java/util/jar/Manifest.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { MappingConfiguration } from '../../../../../net/fabricmc/loader/impl/launch/MappingConfiguration.d.ts'
export interface FabricLauncher extends Object{
    addToClassPath(arg0: Path[], ...arg1: string[]): void;
    getClassByteArray(arg0: string, arg1: boolean): number[];
    getClassPath(): Path[][];
    getEntrypoint(): string;
    getEnvironmentType(): EnvType;
    getManifest(arg0: Path[]): Manifest;
    getMappingConfiguration(): MappingConfiguration;
    getResourceAsStream(arg0: string): InputStream;
    getTargetClassLoader(): ClassLoader;
    isClassLoaded(arg0: string): boolean;
    isDevelopment(): boolean;
    loadIntoTarget(arg0: string): Class<Object>;
    setAllowedPrefixes(arg0: Path[], ...arg1: string[]): void;
    setValidParentClassPath(arg0: Path[][]): void;
}