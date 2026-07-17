import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractJacksonLayout$LogEventWithAdditionalFields extends Object {
    constructor(logEvent: Object, additionalFields: JavaMap<string, string>)
    readonly additionalFields: JavaMap<string, string>;
    readonly logEvent: Object;
    getAdditionalFields(): JavaMap<string, string>;
    getLogEvent(): Object;
}