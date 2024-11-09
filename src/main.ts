import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importar HttpClient

// Crea una nueva configuración de aplicación
const modifiedAppConfig = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []), // Mantener los proveedores existentes
    provideHttpClient(withFetch()) // Agregar HttpClient aquí
  ]
};

bootstrapApplication(AppComponent, modifiedAppConfig)
  .catch((err) => console.error(err));
