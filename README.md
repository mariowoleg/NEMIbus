# BusProject
Aplicació web per a la prova tècnica de programador _frontend_ de NEMI Mobility Solutions. Un cop revisada, aquest repositori pasarà a eliminar-se. :)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Comentaris
Respecte l'enunciat original:
- El format de les dades del camp de Time al crear un servei és de tipus String, no Time. Aquesta decisió es va prendre degut a que la llibreria "Time" es troba _deprecated_ i davant el fet que l'input de tipus=Time es troba en format hh:mm (desconec si hi ha cap forma oficial de canviar el format)
- En quant a la creació de marcadors al mapa, s'ha optat per crear-los un cop es crea un nou servei, donat que només es necessiten les dades de {lat, lng}.

## Possibles millores
M'hauria agradat continuar escalant una mica més l'aplicació i afegir un conjunt de millores que enumeraré a continuació:
- Ordenació dels camps de la taula del /home segons qualsevol dels atributs de forma ascendent/descendent, sense utilitzar Angular Material.
- Accès a la informació de cadascun dels serveis mostrats al llistat al pulsar sobre ells.
- LoadingSpinners al crear un nou servei o al tancar el menú de creació.

##Dubtes (esborrany)
- Configuració de LazyLoading en components encapsulats en un MatDialog.
- Desubscriure's de observables a l'NgOnDestroy. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
