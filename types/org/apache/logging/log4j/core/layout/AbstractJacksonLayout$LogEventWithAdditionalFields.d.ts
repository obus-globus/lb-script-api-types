import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractJacksonLayout$LogEventWithAdditionalFields extends Object {
    constructor(logEvent: Object, additionalFields: { [key: string]: string })
    readonly additionalFields: { [key: string]: string };
    readonly logEvent: Object;
    getAdditionalFields(): { [key: string]: string };
    getLogEvent(): Object;
}