import type { InternalResource } from '../../../../com/oracle/truffle/api/InternalResource.d.ts'
import type { InternalResource$CPUArchitecture } from '../../../../com/oracle/truffle/api/InternalResource$CPUArchitecture.d.ts'
import type { InternalResource$OS } from '../../../../com/oracle/truffle/api/InternalResource$OS.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Module } from '../../../../java/lang/Module.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { PosixFilePermission } from '../../../../java/nio/file/attribute/PosixFilePermission.d.ts'
import type { Enumeration } from '../../../../java/util/Enumeration.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalResource$Env extends Object {
    constructor(resource: InternalResource, contextPreinitializationCheck: () => boolean)
    // private contextPreinitializationCheck: () => boolean;
    // private owner: Module;
    // private resourceClass: Class<InternalResource>;
    // private copyResource(source: Path[], target: Path[], attrs: PosixFilePermission[]): void;
    getCPUArchitecture(): InternalResource$CPUArchitecture;
    getOS(): InternalResource$OS;
    // private getResourceStream(resourceName: string): InputStream;
    inContextPreinitialization(): boolean;
    inNativeImageBuild(): boolean;
    // private loadFileList(source: Path[]): { [key: string]: any };
    // private preferredResource(candidates: Enumeration<URL>): URL;
    readResourceLines(location: Path[]): string[];
    unpackResourceFiles(source: Path[], target: Path[], relativizeTo: Path[]): void;
    unpackResourceFiles(source: Path[], target: Path[], relativizeTo: Path[], filter: (param0: Path[]) => boolean): void;
}