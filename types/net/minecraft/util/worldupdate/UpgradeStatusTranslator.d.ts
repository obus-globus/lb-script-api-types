import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { DataFixTypes } from '../../../../net/minecraft/util/datafix/DataFixTypes.d.ts'
import type { UpgradeProgress } from '../../../../net/minecraft/util/worldupdate/UpgradeProgress.d.ts'
import type { UpgradeStatusTranslator$Messages } from '../../../../net/minecraft/util/worldupdate/UpgradeStatusTranslator$Messages.d.ts'
export class UpgradeStatusTranslator extends Object {
    constructor()
    // private messages: { [key in DataFixTypes]: UpgradeStatusTranslator$Messages };
    translate(upgradeProgress: UpgradeProgress): Component;
}