import type { UpdateChecker } from '../../../../../com/terraformersmc/modmenu/api/UpdateChecker.d.ts'
import type { UpdateInfo } from '../../../../../com/terraformersmc/modmenu/api/UpdateInfo.d.ts'
import type { Mod$Badge } from '../../../../../com/terraformersmc/modmenu/util/mod/Mod$Badge.d.ts'
import type { FabricIconHandler } from '../../../../../com/terraformersmc/modmenu/util/mod/fabric/FabricIconHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ContactInformation } from '../../../../../net/fabricmc/loader/api/metadata/ContactInformation.d.ts'
import type { DynamicTexture } from '../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface Mod extends Object{
    allowsUpdateChecks(): boolean;
    getAuthors(): string[];
    getBadges(): Mod$Badge[];
    getChildHasUpdate(): boolean;
    getContact(arg0: string): ContactInformation;
    getContributors(): { [key: string]: string[] };
    getCredits(): { [key: string]: string[] };
    getDescription(): string;
    getFormattedDescription(): Component;
    getIcon(arg0: FabricIconHandler, arg1: number): DynamicTexture;
    getId(): string;
    getIssueTracker(): string;
    getLicense(): string[];
    getLinks(): { [key: string]: string };
    getName(): string;
    getParent(): string;
    getPrefixedVersion(): string;
    getSha512Hash(): string;
    getSource(): string;
    getSummary(): string;
    getTranslatedDescription(): string;
    getTranslatedName(): string;
    getTranslatedSummary(): string;
    getUpdateChecker(): UpdateChecker;
    getUpdateInfo(): UpdateInfo;
    getVersion(): string;
    getWebsite(): string;
    hasUpdate(): boolean;
    isHidden(): boolean;
    isReal(): boolean;
    setChildHasUpdate(): void;
    setUpdateChecker(arg0: UpdateChecker): void;
    setUpdateInfo(arg0: UpdateInfo): void;
}