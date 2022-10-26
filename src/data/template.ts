export const Template = (element: any) => {
    const card = `<div class="card character__card">
            <img
              src="../img/no-one.jpg"
              alt=" ${element.name} ${element.family} "
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${element.name} ${element.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${element.age} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: ${element.kingdomYears}</li>
                  <li>Arma: ${element.weapon}</li>
                  <li>Destreza: ${element.skill} </li>
                  <li>Peloteo: ${element.patheticLevel} </li>
                  <li>Asesora a: </li>
                  <li>Sirve a: </li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji"></i>
          </div>`;
    return card;
};
