// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			password: string;
			username: string;
			refresh: number;
			selectApi: number;
		}
	}
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};
