import { Response, SuperAgentRequest } from 'superagent';

declare class ProxyClient {
	constructor(options?: ProxyClient.Options); 
	getUrl(path: string): string;
	request(method: string, path: string): SuperAgentRequest;
	get(path: string): SuperAgentRequest;
	post(path: string): SuperAgentRequest;
	put(path: string): SuperAgentRequest;
	del(path: string): SuperAgentRequest;
	rejectResponse(response: Response): PromiseLike<Error>;
}

declare namespace ProxyClient {
	interface Options {
		rootUrl?: string;
		logger?: any;
		agent?: any;
		timeout?: number;
		headers?: {};
	}
}

export = ProxyClient;

