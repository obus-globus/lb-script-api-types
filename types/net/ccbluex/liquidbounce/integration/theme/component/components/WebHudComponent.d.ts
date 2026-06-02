import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { HudComponent } from '../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { HudComponentTweak } from '../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { Alignment } from '../../../../../../../net/ccbluex/liquidbounce/utils/render/Alignment.d.ts'
export class WebHudComponent extends HudComponent {
    constructor(name: string, enabled: boolean, alignment: Alignment, tweaks: HudComponentTweak[], values: JsonObject[])
    readonly values: JsonObject[];
    walkInit(): void;
}