import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$HttpResponse extends Object {
    static write400(paramchannel: ByteChannel, paramtext: string): void;
    static write404(paramchannel: ByteChannel): void;
    constructor(status: string, contentType: string, encoding: string, content: string)
    // private content: string;
    // private contentType: string;
    // private encoding: string;
    // private headers: { [key: string]: string };
    // private status: string;
    addHeader(name: string, value: string): void;
    writeTo(channel: ByteChannel): void;
}