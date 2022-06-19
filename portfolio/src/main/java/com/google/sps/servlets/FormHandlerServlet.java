package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String name = request.getParameter("contact_name");
    String email = request.getParameter("contact_email");
    String message = request.getParameter("contact_message");

    // Print the value so you can see it in the server logs.
    System.out.print(name + "submitted: " + message);
    if (email != null) {
      System.out.print(" and they can be reached at " + email);
    }
    System.out.println();

    // Write the value to the response so the user can see it.
    response.getWriter().println("You submitted: " + message);
  }
}