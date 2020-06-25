    $(document).ready(function () {
        $("#toggle").click(function () {
          var elem = $("#toggle").text();
          if (elem == "Read More") {
            $("#toggle").text("Read Less");
            $("#projects").slideDown();
            $("#projectsone").slideDown();
            $("#projectstwo").slideDown();
            $("#projectsthree").slideDown();
          } else {
            $("#toggle").text("Read More");
            $("#projects").slideUp();
            $("#projectsone").slideUp();
            $("#projectstwo").slideUp();
            $("#projectsthree").slideUp();
          }
        });
      });