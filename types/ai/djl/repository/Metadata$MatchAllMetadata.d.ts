import type { Artifact } from '../../../ai/djl/repository/Artifact.d.ts'
import type { Metadata } from '../../../ai/djl/repository/Metadata.d.ts'
import type { VersionRange } from '../../../ai/djl/repository/VersionRange.d.ts'
export class Metadata$MatchAllMetadata extends Metadata {
    constructor()
    search(arg0: VersionRange, arg1: { [key: string]: string }): Artifact[];
}