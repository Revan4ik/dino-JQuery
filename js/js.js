$(document).ready(function () {
    store = {
      elements: [
        {
          id: 1,
          group: "body_color",
          options: [
            { num: 1 },{ num: 2 },{ num: 3 },{ num: 4 },{ num: 5 },{ num: 6 },
          ],
        },
        {
          id: 2,
          group: "eyes",
          options: [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }],
        },
        { id: 3, group: "head", options: [{ num: 1 }, { num: 2 }, { num: 3 }] },
        { id: 4, group: "mouth", options: [{ num: 1 }, { num: 2 }, { num: 3 }] },
        {
          id: 5,
          group: "spots",
          options: [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }],
        },
        { id: 6, group: "scale", options: [{ num: 1 }, { num: 2 }, { num: 3 }] },
      ],
    };

    $(".container").append("<div class='wrap'></div>");
    $(".wrap").append("<div class='option-wrap'></div>");
    $(".wrap").append("<div class='window-wrap'></div>");
    $(".wrap").append("<div class='option-child_wrap'></div>");
    $(".window-wrap").append("<div class='dressing_room'></div>");
  
    store.elements.forEach((el) => {
      var $button = $(
        "<button data-id=" + el.id +
        " class='btn option-btn'><img class='option-img' src='./source/icons/" + el.id + ".png'></button>"
      );
      $(".option-wrap").append($button);
  
      $button.on("click", function () {
        $(".option-child_wrap").empty();
        el.options.forEach((option) => {
          var $buttonOption = $("<button class='btn option-child-btn'></button>");
          $buttonOption.attr("data-id", option.num);
          var $imgOption = $("<img class='option-img'>");
          $imgOption.attr(
            "src", "./source/" + el.group + "/" + option.num + ".png"
          );
          $buttonOption.append($imgOption);
          $(".option-child_wrap").append($buttonOption);
  
          $buttonOption.on("click", function () {
            $("*[data-group=" + el.group + "]").remove();
            var $imgOptionGluing = $imgOption.clone().appendTo($(".dressing_room"));
            $imgOptionGluing.addClass([
              el.group + "-" + el.id,
              el.group + "-" + el.id + "-" + option.num
            ]);
            $imgOptionGluing.attr("data-group", el.group);
          });
        });
      });
    });
  });