import type { DataFixer } from '../../../../../../com/mojang/datafixers/DataFixer.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { File } from '../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DebugScreenEntryList$SerializedOptions } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntryList$SerializedOptions.d.ts'
import type { DebugScreenEntryStatus } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntryStatus.d.ts'
import type { DebugScreenProfile } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenProfile.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugScreenEntryList extends Object {
    constructor(workingDirectory: File, dataFixer: DataFixer)
    // private allStatuses: Map<Identifier, DebugScreenEntryStatus>;
    // private codec: Codec<DebugScreenEntryList$SerializedOptions>;
    readonly currentlyEnabled: Identifier[];
    readonly currentlyEnabledVersion: number;
    // private debugProfileFile: File;
    // private isOverlayVisible: boolean;
    // private profile: DebugScreenProfile;
    getCurrentlyEnabled(): E[];
    getCurrentlyEnabledVersion(): number;
    getStatus(location: Identifier): DebugScreenEntryStatus;
    isCurrentlyEnabled(location: Identifier): boolean;
    isOverlayVisible(): boolean;
    isUsingProfile(profile: DebugScreenProfile): boolean;
    load(): void;
    loadProfile(profile: DebugScreenProfile): void;
    rebuildCurrentList(): void;
    // private resetStatuses(newEntries: Map<Identifier, DebugScreenEntryStatus>): void;
    // private resetToProfile(profile: DebugScreenProfile): void;
    save(): void;
    // private setFullDebugStatuses(): void;
    setOverlayVisible(visible: boolean): void;
    // private setReducedDebugStatuses(): void;
    setStatus(location: Identifier, status: DebugScreenEntryStatus): void;
    toggleDebugOverlay(): void;
    toggleStatus(location: Identifier): boolean;
}