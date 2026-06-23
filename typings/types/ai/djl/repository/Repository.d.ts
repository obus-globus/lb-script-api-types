import type { Application } from '../../../ai/djl/Application.d.ts'
import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Artifact$Item } from '../../../ai/djl/repository/Artifact$Item.d.ts'
import type { MRL } from '../../../ai/djl/repository/MRL.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { Progress } from '../../../ai/djl/util/Progress.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Repository extends Object{
    addResource(arg0: MRL): void;
    dataset(arg0: Application, arg1: string, arg2: string): MRL;
    dataset(arg0: Application, arg1: string, arg2: string, arg3: string): MRL;
    getBaseUri(): URI;
    getCacheDirectory(): Path[];
    getFile(arg0: Artifact$Item, arg1: string): Path[];
    getName(): string;
    getResourceDirectory(arg0: Artifact): Path[];
    getResources(): MRL[];
    isRemote(): boolean;
    listDirectory(arg0: Artifact$Item, arg1: string): string[];
    locate(arg0: MRL): Metadata;
    model(arg0: Application, arg1: string, arg2: string): MRL;
    model(arg0: Application, arg1: string, arg2: string, arg3: string): MRL;
    model(arg0: Application, arg1: string, arg2: string, arg3: string, arg4: string): MRL;
    openStream(arg0: Artifact$Item, arg1: string): InputStream;
    prepare(arg0: Artifact): void;
    prepare(arg0: Artifact, arg1: Progress): void;
    resolve(arg0: MRL, arg1: { [key: string]: string }): Artifact;
}