import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Module } from '../../../../../../java/lang/Module.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Feature } from '../../../../../../org/graalvm/nativeimage/hosted/Feature.d.ts'
import type { Feature$AfterAnalysisAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$AfterAnalysisAccess.d.ts'
import type { Feature$AfterCompilationAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$AfterCompilationAccess.d.ts'
import type { Feature$AfterHeapLayoutAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$AfterHeapLayoutAccess.d.ts'
import type { Feature$AfterImageWriteAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$AfterImageWriteAccess.d.ts'
import type { Feature$AfterRegistrationAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$AfterRegistrationAccess.d.ts'
import type { Feature$BeforeAnalysisAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$BeforeAnalysisAccess.d.ts'
import type { Feature$BeforeCompilationAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$BeforeCompilationAccess.d.ts'
import type { Feature$BeforeHeapLayoutAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$BeforeHeapLayoutAccess.d.ts'
import type { Feature$BeforeImageWriteAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$BeforeImageWriteAccess.d.ts'
import type { Feature$BeforeUniverseBuildingAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$BeforeUniverseBuildingAccess.d.ts'
import type { Feature$DuringAnalysisAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$DuringAnalysisAccess.d.ts'
import type { Feature$DuringSetupAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$DuringSetupAccess.d.ts'
import type { Feature$IsInConfigurationAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$IsInConfigurationAccess.d.ts'
import type { Feature$OnAnalysisExitAccess } from '../../../../../../org/graalvm/nativeimage/hosted/Feature$OnAnalysisExitAccess.d.ts'
import type { ICU4JFeature$ThrowingFunction } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/ICU4JFeature$ThrowingFunction.d.ts'
export class ICU4JFeature extends Object implements Feature {
    constructor()
    // private addCompressedResources(patterns: string[]): void;
    // private addCompressedResources(patterns: string[], module: Module, entryStream: Stream<string>, openResource: (param0: string) => IOException): void;
    afterAnalysis(access: Feature$AfterAnalysisAccess): void;
    afterCompilation(access: Feature$AfterCompilationAccess): void;
    afterHeapLayout(access: Feature$AfterHeapLayoutAccess): void;
    afterImageWrite(access: Feature$AfterImageWriteAccess): void;
    afterRegistration(access: Feature$AfterRegistrationAccess): void;
    beforeAnalysis(access: Feature$BeforeAnalysisAccess): void;
    beforeCompilation(access: Feature$BeforeCompilationAccess): void;
    beforeHeapLayout(access: Feature$BeforeHeapLayoutAccess): void;
    beforeImageWrite(access: Feature$BeforeImageWriteAccess): void;
    beforeUniverseBuilding(access: Feature$BeforeUniverseBuildingAccess): void;
    cleanup(): void;
    duringAnalysis(access: Feature$DuringAnalysisAccess): void;
    duringSetup(access: Feature$DuringSetupAccess): void;
    getDescription(): string;
    getRequiredFeatures(): Class<Feature>[];
    getURL(): string;
    isInConfiguration(access: Feature$IsInConfigurationAccess): boolean;
    onAnalysisExit(access: Feature$OnAnalysisExitAccess): void;
}