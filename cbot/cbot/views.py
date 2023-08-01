from django.shortcuts import render, redirect
from django.http import HttpResponse
# from .models import ChatRec
# from .forms import ChatRecForm
# from .aiengine import generateChatResponse
from django.http import JsonResponse


def home(request):
    return render(request, '../template/main.html')
# def home(request):
#     context = {}
#     print(request)
#     if request.method == "POST":
#         print('here1')
#         prompt = request.POST['prompt']
#         res = {'answer': generateChatResponse(prompt)}
#         print(prompt)
#         print(res)
#
#         return JsonResponse(res)
#     return render(request, 'index.html', context)
#
#
# def contact(request):
#     context = {
#         'ContactPage'
#     }
#     return render(request, 'contact.html', context)
#
#
# def about(request):
#     context = {
#         'AboutPage'
#     }
#     return render(request, 'about.html', context)
